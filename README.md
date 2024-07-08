# Aslice

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Custom plugins

### custom aslice plugins:

```ts
AsliceResources: PluginObject
```

#### get resources from amazonaws
```ts
/**
 * /tracks/images/12e096df-6722-492e-b440-f3a35b50a5c9
 * 
 * value: {string}
 */
$vm.$aslice.getImage(value: string): string
```

#### directives

```ts
    v-aslice-resources="string"
    
    E.g
    v-aslice-resources="'Aslice+Presentation_Web2022.pdf'"
    --> href="https://aslice-dev-storage.s3.amazonaws.com/Aslice+Presentation_Web2022.pdf"
```
add href attribute to link with develop and production links


```ts
v-in-dev
```
will hide developing modules in production mode
