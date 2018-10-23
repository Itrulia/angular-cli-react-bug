# ReactAngularBug

Execute the following commands to reproduce

```bash
npm install
npx ng build @itrulia/test-library
npx ng serve
```

This will now work, to make it fail go to `src/app/react-component.tsx` and uncomment line 7.

You will encounter

```
ERROR in ./src/app/react-component.tsx
Module not found: Error: Can't resolve '@itrulia/test-library' in '/Users/karlmerkli/Documents/@itrulia/react-angular-bug/src/app'
```

If you change the import now from `@itrulia/test-library` to `./reexport` it will work again. Note that `src/app/reexport.ts` contains `export * from '@itrulia/test-library';`.