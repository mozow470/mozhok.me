export default async (req, res) => {

    let option={
            method:"POST",
            headers:{
                "Authorization": 'Bearer ' +"secret_T7wfS6SFsdyGnMBEPeDH19XEywx6UKrrrTf6f8VPx4n" ,
                'Notion-Version': '2021-08-16',
            },
            body:{
                "filter":{
                    "property":"参考",
                    "checkbox":{
                        "equals":true
                    }
                }
            }
    }

    let url='https://api.notion.com/v1/databases'+req.url+'/query'
 
    const result =await $fetch(url,option);
   
    const pag=result.results;
    pag.forEach(element => {
        delete element.created_time;
        delete element.last_edited_time;
        delete element.created_by;
        delete element.last_edited_by;
        delete element.parent
        delete element.object
        delete element.id
        delete element.cover
        delete element.icon;
        delete element.archived
    });

    return pag




 }