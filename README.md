# Vite 8 Issue

https://github.com/vitejs/vite/issues/21939


```shell
# Docker (Optional)
docker build --target nonroot-dev -t vite8-issue-dev .
docker run -it --rm -p 80:80 --name vite8-issue-dev-container -v ${PWD}:/home/nonroot/app vite8-issue-dev /bin/bash

# ./
npm i

# ./browser/
npm i

npx --yes serve ./dist/ -p 80&

npm run clean && npm run format && npm run lint && npm run build

```
