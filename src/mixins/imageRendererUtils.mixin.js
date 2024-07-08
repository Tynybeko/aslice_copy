export default {
  methods: {
    getSvgImagesAsDataUris(svg) {
      let matcher = /xlink:href="(.+)"/g;
      let matches = this.scan(matcher, svg).map(match => match.splice(1)[0]);
      let requests = matches.map(url => this.getDataUri(url));
      return Promise.all(requests).then(urls => {
        let result = {};
        for (let i = 0; i < matches.length; i++) {
          result[matches[i]] = urls[i];
        }
        return result;
      });
    },
  
    getDataUri(url) {
      return new Promise(resolve => {
        let req = new XMLHttpRequest();
        req.open("get", `${url}?nonce=${Math.floor(Math.random() * 100000)}`);
        req.responseType = "blob";
        req.onload = () => {
          let reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.readAsBinaryString(req.response);
        };
        req.send();
      });
    },
  
    loadSvgAsImage(svg) {
      return new Promise(resolve => {
        let blob = new Blob([svg], { type: "image/svg+xml" });
        let url = URL.createObjectURL(blob);
      
        let img = new Image();
        img.onload = () => setTimeout(() => resolve(img), 50);
        img.src = url;
      });
    },
  
    replaceUrlsWithDataUris(svg, dataUris) {
      for (let url in dataUris) {
        svg = svg.replace(url, dataUris[url]);
      }
      return svg;
    },
  
    async renderSvgToCanvas(svg, position) {
      const { x, y } = position;
      const dataUrl = await this.getSvgImagesAsDataUris(svg);
      const svgData = this.replaceUrlsWithDataUris(svg, dataUrl);
      const image = await this.loadSvgAsImage(svgData);
      this.ctx.drawImage(image, x, y, image.naturalWidth, image.naturalHeight);
      return image;
    },
  
    async shareData() {
      const file = new File([this.blob], "preview.jpg", {
        type: "image/jpeg",
        quality: 1.0
      });
      console.log(file);
      await navigator
        .share({
          url: "/downloads",
          text: "share image to",
          title: "preview.jpg",
          files: [file]
        })
        .then((this.blob = null));
    },
  
    scan(regex, str) {
      let results = [];
      let result;
      while ((result = regex.exec(str))) {
        results.push(result);
      }
      return results;
    },
  },
}