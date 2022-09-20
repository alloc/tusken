import exec from '@cush/exec'

test('TypeScript types', async () => {
  const typeChecker = exec('tsc --noEmit --project types/tsconfig.json', {
    cwd: __dirname,
    noThrow: true,
  })
  const output = await typeChecker
  if (typeChecker.exitCode !== 0) {
    console.error(output)
  }
  expect(typeChecker.exitCode).toBe(0)
})
