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



    // const page =await $fetch('https://api.notion.com/v1/blocks/'+id+'/children?page_size=100',nextOption);
    
    let blocks=[];
    await GetBlocks(id,nextOption,blocks,0);
    let num;
    for(let i=0; i<blocks.length;i++){
        if(blocks[i].type=='table'){
            num=i;
            blocks[i].rows=[];
        }else if(blocks[i].type=='table_row'){
            blocks[num].rows[i-num-1]=blocks[i];
        }
    }

   
    return blocks;

 }

 async function GetBlocks(id,nextOption,blocks,counts){
    const bearBlocks=await $fetch('https://api.notion.com/v1/blocks/'+id+'/children?page_size=100',nextOption);
    let ex=bearBlocks.results;

    for(let i=0; i<ex.length; i++){
        const has=ex[i].has_children;

        ex[i].age=counts;
        delete ex[i].created_time;
        delete ex[i].last_edited_time;
        delete ex[i].archived;
        delete ex[i].created_by;
        delete ex[i].last_edited_by;

        blocks.push(ex[i]);

        if(has){
            await GetBlocks(ex[i].id,nextOption,blocks,counts+1);
        }
    }

 }