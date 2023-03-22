const createPageName = (data: string) => {
  let pageName = "";
  if (data.includes("/")) {
    pageName = data.split("/")[data.split("/").length - 1].split("-").join(" ");
    if (isValidObjectID(pageName)) {
      pageName = data
        .split("/")
        [data.split("/").length - 2].split("-")
        .join(" ");
    }
  } else {
    pageName = data.slice(1).charAt(0).toUpperCase() + data.slice(2);
  }
};

export const isValidObjectID = (id: string) =>
  !!id.match(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i);

export default createPageName;
