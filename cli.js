#!/usr/bin/env node

import { execSync } from 'node:child_process'
import fs from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const templatePkg = fileURLToPath(new URL('package.json', import.meta.url))
const templateRC = fileURLToPath(new URL('.eslintrc', import.meta.url))

const pkg = JSON.parse(await fs.readFile(templatePkg))
const rc = await fs.readFile(templateRC)

const rcPath = join('.eslintrc')

await fs.writeFile(rcPath, rc)

const deps = Object.keys(pkg.devDependencies)

execSync(`npm i --save-dev ${deps.join(' ')}`, { stdio: 'inherit' })
