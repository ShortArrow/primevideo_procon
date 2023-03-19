export interface IParsed {
  episodeId: number;
  thumbnail: Element;
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
  const watchedDataElement = element.querySelector(
    "[data-is-watched]"
  ) as HTMLDivElement;
  return Boolean(watchedDataElement.getAttribute("data-is-watched"));
}

function pickUpPlayUrl(element: Element) {
  const playButton = element.querySelector(
    "[data-automation-id='episodes-playbutton']"
  ) as HTMLAnchorElement;
  if (playButton) {
    if (playButton.href !== null) {
      return playButton.href;
    }
  }
  return "";
}

function pickUpPlayText(element: Element) {
  const playButton = element.querySelector(
    "[data-automation-id='episodes-playbutton']"
  ) as HTMLAnchorElement;
  if (playButton) {
    const playText = playButton.getAttribute("aria-label");
    if (playText !== null) {
      return playText.replace("{lineBreak}"," : ");
    }
  }
  return "";
}

function pickUpPercentage(element: Element) {
  const percentElement = element.querySelector(
    "[style^='width:'][style$='%']"
  ) as HTMLDivElement;
  const percentage = percentElement ? parseInt(percentElement.style.width) : 0;
  return percentage;
}

function pickUpResumeText(element: Element) {
  const resumeTextElement = element.querySelector(
    "[data-automation-id='dv-progress-resume-text']"
  ) as HTMLDivElement;
  if (resumeTextElement) {
    if (resumeTextElement.textContent) {
      return resumeTextElement.textContent;
    }
  }
  return "";
}

function pickUpEpisodeId(element: Element) {
  return parseInt(element.id.split("-").slice(-1)[0]) + 1;
}

export default parser;
