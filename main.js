
$(document).ready(()=>{
  $('#searchForm').on('submit',(e)=>
  {

  let searchText=$('#searchText').val();
    console.log("You searched for "+searchText);
  getQuery(searchText);

  e.preventDefault();
  });
});

function getQuery(searchText)
{
  const CITY=searchText;
const url=`https://newsapi.org/v2/top-headlines?apiKey=cd1db87dec794c2288c915ba6abeee94&country=in`;
axios.get(url)


  .then((response)=>{

    var arr=response.data.articles;
    //  console.log(arr);
    let output='';
    var first=[];
    var second=[];
      for(var i=0;i<arr.length;i++)
      {
        var x=arr[i].title;
        var newarr=[];
        var temp="";
        for(var j=0;j<x.length;j++)
        {
          if(x[j]!=' ')
            temp+=x[j];
          else{
            newarr.push(temp);
            temp="";
          }
        }
        if(temp!="")
          newarr.push(temp);

          console.log(newarr);
          var found=0;
       for(var k=0;k<newarr.length;k++)
       {

         var str = newarr[k];
         var str2 = newarr[k];
         var res = str2.toLowerCase();
         var searchText1=searchText.toLowerCase();
         console.log(searchText1)
         console.log(str2);
         var n = res.search(searchText1);
         if(n!=-1&&k===0)
        {
          found=1;
          first.push(x);
            output+=`<br><h3>${x}</h3><br>`;
            break;
        }
//        if(found==1)
  //      break;

        if(n!=-1&&k!=0)
        {
          found=1;
          second.push(x);
          //  console.log(str);
          //  console.log("One");
            output+=`<br><h3>${x}</h3><br>`;
            break;
        }
    //    if(found===1)
      //  break;



       }


}



if(output=='')
  output+=`<h3>No Result Found</h3>`;


$('#details').html(output);

  })

.catch((err)=>
{
  console.log(err);
});

}
