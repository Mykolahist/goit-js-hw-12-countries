import { info, success, error } from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import '@pnotify/core/dist/BrightTheme.css';

export function warningNotice() {
    const myError = error({
      text: "Too many matches found. Please enter a more specific query!",
      delay: 2000,
  });
};

export function errorNotice() {
    const myError = error({
      text: "There is no country with this name",
      delay: 2000,
  });
};

export function clarificationNotice() {
    const myInfo = info({
      text: "Please enter a more specific query!",
      delay: 2000,
  });
};

export function successNotice() {
    const mySuccess = success({
      text: "The request has been successful.",
      delay: 2000,
  });
}


export default { warningNotice, errorNotice, clarificationNotice, successNotice };