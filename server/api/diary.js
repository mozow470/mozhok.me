// import type { IncomingMessage, ServerResponse } from 'http'

export default async (req, res) => {
    //   const result = await $fetch('https://jsonplaceholder.typicode.com/users')
        
    let option={
            method:"POST",
            headers:{
                "Authorization": 'Bearer ' +"secret_T7wfS6SFsdyGnMBEPeDH19XEywx6UKrrrTf6f8VPx4n" ,
                'Notion-Version': '2021-08-16',
            },
            body:{
                "filter":{
                    "property":"Public",
                    "checkbox":{
                        "equals":true
                    }
                }
            }
    }
    function addSlash(text){
        const a=text[0];
        const b=text[1];
        const c=text[2];
        const d=text[3];
        const e=text[4];
        const f=text[5];
        const g=text[6];
        const h=text[7];
        return a+b+c+d+'/'+e+f+'/'+g+h;
    }

    const result =await $fetch('https://api.notion.com/v1/databases/ad023003677c4d29bd8c75872c154b68/query',option);
    result.results.sort((a,b)=>{
        return parseInt(-a.properties.Name.title[0].text.content)+parseInt(b.properties.Name.title[0].text.content)});
    result.results.forEach(element => {
        element.title=addSlash(element.properties.Name.title[0].text.content)
    });
    return result




 }