export interface IParsed {
  episodeId: number;
  thumbnail: Element;
  percentage: number;
  watched: boolean;
}
function parser(epList: NodeListOf<Element>) {
  let ll: Array<IParsed> = [];
  for (let index = 0; index < epList.length; index++) {
    const element = epList[index];
    if (element.textContent) {
      const divm = document.createElement("div");
      divm.textContent = "thumb";
      ll.push({
        episodeId: parseInt(element.id.split("-").slice(-1)[0]) + 1,
        thumbnail: document.createElement("div"),
        percentage: 100,
        watched: true,
      });
    }
  }
  return ll;
}

export default parser;
