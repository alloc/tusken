import exec from '@cush/exec'

test('TypeScript types', async () => {
  const output = await exec('tsc --noEmit --project types/tsconfig.json', {
    cwd: __dirname,
    noThrow: true,
  })

  expect(output).toMatchInlineSnapshot('""')
  expect(output).toBe('')
})
