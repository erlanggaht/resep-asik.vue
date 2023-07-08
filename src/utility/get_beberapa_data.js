
export default function getData_beberapa1 (data) {
    const mapping_result =  data.map((m,i) => {
        const result =  i >= 8  ? m : false
        return result
      })
     return mapping_result.filter((m) => {
        return typeof m ? m : typeof m // !m adalah boolean, m adalah object
      })
}

export function getData_beberapa2 (data) {
  const mapping_result =  data.map((m,i) => {
      const result =  i+1 <= 2  ? m : false
      return result
    })
   return mapping_result.filter((m) => {
      return typeof m ? m : typeof m // !m adalah boolean, m adalah object
    })
}


