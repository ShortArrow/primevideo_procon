import debuglog from "./logger";
export interface IParsed {
  episodeId: number;
  thumbnail: HTMLElement;
  percentage: number;
  watched: boolean;
  playUrl: string;
  playText: string;
  resumeText: string;
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
        thumbnail: pickUpThumbnail(element),
        percentage: pickUpPercentage(element),
        watched: pickUpIsWatched(element),
        playUrl: pickUpPlayUrl(element),
        playText: pickUpPlayText(element),
        resumeText: pickUpResumeText(element),
      });
    }
  }
  return ll;
}

function pickUpThumbnail(element: Element) {
  const thumbnailElement = element.getElementsByTagName(
    "picture"
  )[0] as HTMLPictureElement;
  return thumbnailElement;
}

function pickUpIsWatched(element: Element) {
  const watchedDataElement = element.getAttribute("data-is-watched");
  return Boolean(watchedDataElement);
}

function pickUpPlayUrl(element: Element) {
  const playButton = element.querySelector(
    "[data-automation-id='episodes-playbutton']"
  ) as HTMLAnchorElement;
  return playButton?.href ?? "";
}

function pickUpPlayText(element: Element) {
  const playButton = element.querySelector(
    "[data-automation-id='episodes-playbutton']"
  ) as HTMLAnchorElement;
  const playText = playButton?.getAttribute("aria-label") ?? "";
  return playText.replace("{lineBreak}"," : ");
}

function pickUpPercentage(element: Element) {
  const percentElement = element.querySelector(
    "[style^='width:'][style$='%']"
  ) as HTMLDivElement;
  const percentage = parseInt(percentElement?.style.width ?? "0");
  return percentage;
}

function pickUpResumeText(element: Element) {
  const resumeTextElement = element.querySelector(
    "[data-automation-id='dv-progress-resume-text']"
  ) as HTMLDivElement;
  return resumeTextElement?.textContent ?? "";
}

function pickUpEpisodeId(element: Element) {
  const id = element.id.split("-").reverse()[0];
  return parseInt(id) + 1;
}

export default parser;
