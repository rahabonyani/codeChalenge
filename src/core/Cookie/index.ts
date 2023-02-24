import Cookies from "js-cookie";

export const setCookies = (cookiesName: string, cookiesProps: string) => {
    let d = new Date();
    d.setTime(d.getTime() + 2 * 3600 * 1000);
    Cookies.set(cookiesName, cookiesProps, { path: "/", expires: d });
};

export const removeCookies = (cookiesName: string[]) => {
    cookiesName.forEach((name) => {
        Cookies.remove(name);
    });
};
