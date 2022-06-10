import { elasticOut, sineOut } from 'svelte/easing'
import dayjs from 'dayjs'
// import {variables} from '$lib/variables'

// 2200-11-23T13:43:40

export const convertISODateToInputTZ = (dayjsDate) => {
  return dayjsDate.format('YYYY-MM-DD[T]HH:mm');
}

export const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    let i = "";
    if(item[1]["type"] === "array") i = []
    if(item[1]["type"] === "object_array") i = {}
    if(item[1]["type"] === "number") i = 0
    return {
      ...obj,
      [item[key]]: "",
    };
  }, initialValue);
};

export function spin(node, { duration }) {
  return {
    duration,
    css: t => {
      const eased = elasticOut(t);

      return `
        transform: scale(${eased});`
    }
  };
}

export function fadeSlideLeft(node, { duration, delay }) {
		return {
			duration,
      delay,
			css: t => {
				const eased = sineOut(t);

				return `
					transform: translate(${-5*(1-eased)}%,0);
          opacity: ${eased};
					);`
			}
		};
	}

// export const pinJSONToIPFS = async (json) => {
//   const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
//   const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//           pinata_api_key: variables.pinataKey,
//           pinata_secret_api_key: variables.pinataSecret
//       },
//       body: JSON.stringify(json)
//   });
//   var res = await response.json()
//   let hash = res.IpfsHash
//   console.log(hash)
//   return res;
// }

export const rgbToHex = (r, g, b) => {
  return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
}
