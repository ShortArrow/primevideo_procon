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
        episodeId: pickUpEpisodeId(element),
        thumbnail: document.createElement("div"),
        percentage: pickUpPercentage(element),
        watched: true,
      });
    }
  }
  return ll;
}

function pickUpPercentage(element: Element) {
  const percentElement = element.querySelector(
    "[style^='width:'][style$='%']"
  ) as HTMLDivElement;
  const percentage = percentElement
    ? parseInt(percentElement.style.width)
    : 0;
  return percentage;
}

function pickUpEpisodeId(element: Element) {
  return parseInt(element.id.split("-").slice(-1)[0]) + 1;
}

export default parser;
