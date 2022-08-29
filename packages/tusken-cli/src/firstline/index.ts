// https://github.com/pensierinmusica/firstline/blob/1ddb45976bcc1fe3fb015201f47627cda807e926/index.js
import fs from 'fs'

export function firstLine(
  path: string,
  usrOpts: { encoding?: BufferEncoding; lineEnding?: string } = {}
) {
  const opts = {
    encoding: 'utf8' as BufferEncoding,
    lineEnding: '\n',
  }
  Object.assign(opts, usrOpts)
  return new Promise<string>((resolve, reject) => {
    const rs = fs.createReadStream(path, { encoding: opts.encoding })
    let acc = ''
    let pos = 0
    let index
    rs.on('data', chunk => {
      index = chunk.indexOf(opts.lineEnding)
      acc += chunk
      if (index === -1) {
        pos += chunk.length
      } else {
        pos += index
        rs.close()
      }
    })
      .on('close', () =>
        resolve(acc.slice(acc.charCodeAt(0) === 0xfeff ? 1 : 0, pos))
      )
      .on('error', err => reject(err))
  })
}
