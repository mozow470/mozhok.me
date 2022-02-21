export default async (req, res) => {
    //   const result = await $fetch('https://jsonplaceholder.typicode.com/users')
        
    const option={
            method:"POST",
            headers:{
                "Authorization": 'Bearer ' +"secret_T7wfS6SFsdyGnMBEPeDH19XEywx6UKrrrTf6f8VPx4n" ,
                'Notion-Version': '2021-08-16',
            },
            body:{
                "filter":{
                    "property":"Name",
                    "text":{
                        "contains":req.url.split('/')[1]
                    },
                }
            }
    }

   

    const result =await $fetch('https://api.notion.com/v1/databases/ad023003677c4d29bd8c75872c154b68/query',option);
    const id=result.results[0].url.split('-')[1];

    const nextOption={
        method:"GET",
        headers:{
            "Authorization": 'Bearer ' +"secret_T7wfS6SFsdyGnMBEPeDH19XEywx6UKrrrTf6f8VPx4n" ,
            'Notion-Version': '2021-08-16',
        }
    }

    const page =await $fetch('https://api.notion.com/v1/blocks/'+id+'/children?page_size=100',nextOption);
    
    return page;




 }