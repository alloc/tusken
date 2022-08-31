import * as cheerio from 'cheerio'
import fetch from 'node-fetch'

type Selection = ReturnType<ReturnType<typeof cheerio.load>>

export async function fetchSummaries(names: string[]) {
  const urls: Record<string, string> = {}
  await Promise.all(
    Array.from(new Array(26), async (_, i) => {
      const letter = String.fromCharCode(97 + i)
      const linkElems = await fetchAndExtract(
        `https://pgpedia.info/${letter}/index.html`,
        'a.pgpedia_pagelink'
      )
      linkElems?.each(i => {
        let title = linkElems.eq(i).attr('title')
        if (title) {
          if (title.endsWith('()')) {
            title = title.slice(0, -2)
          }
          if (names.includes(title)) {
            urls[title] = linkElems.eq(i).attr('href')!
          }
        }
      })
    })
  )

  const summaries: Record<string, string> = {}
  await Promise.all(
    names.map(async name => {
      const url = urls[name]
      if (url) {
        const elem = await fetchAndExtract(url, '#entry-summary')
        const summary = elem?.text().trim()
        if (summary) {
          summaries[name] = summary + '\n\n@see ' + url
        }
      }
    })
  )
  return summaries
}

export async function fetchAndExtract(
  url: string,
  selector: string
): Promise<Selection | undefined> {
  try {
    const resp = await fetch(url)
    console.log(resp.status, url)
    if (resp.status == 500) {
      return new Promise<any>(resolve => {
        setTimeout(() => resolve(fetchAndExtract(url, selector)), 1000)
      })
    }
    if (resp.status == 200) {
      const $ = cheerio.load(await resp.text())
      return $(selector)
    }
  } catch (e: any) {
    if (e.code == 'ECONNRESET') {
      console.log(e.code, url)
      return fetchAndExtract(url, selector)
    }
  }
}
