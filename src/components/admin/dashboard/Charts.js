import React from 'react'

import { Chart as chartjs } from 'chart.js'
import { CategoryScale,LinearScale,PointElement
    ,LineElement,Title,Tooltip,ArcElement,Legend
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import {Doughnut} from 'react-chartjs-2'
 
chartjs.register(CategoryScale,LinearScale,PointElement
    ,LineElement,Title,Tooltip,ArcElement,Legend)


    export const MyLinechart=({views=[]})=>{
    const labels= getyears()
    const options={
     responsive:true,
    plugins :{
        Legend:{
        position:"bottom"
        },
        Title:{
            display:true,
            text:"Yearly Views"
        }
    }
    }
    const data={
        labels,
        datasets:[{
label:'views',data:views,bordercolor:"rgba(107,70,193,0.7)",
backgroundColor: "#6b46c1"
        }]
    }

 return <Line options={options}  data={data}/>
        }

        export const MyDoughnutchart= ({users=[]})=> {
            // const options={
            //     responsive:true,
            //  }
            const data = {
                labels:["subscribed","Not subscribed"],
            datasets:[ 
                {
label:"Views",
data:users,
borderColor:["rgba(62,12,171,0.3)","rgba(214,43,129,0.3)"],
backgroundColor:["rgba(62,12,171,0.3)","rgba(214,43,129,0.3)"],
borderWidth:1,
                }
            ]
       }
       return <Doughnut  data={data}/>
            }


            function getyears(){
                const months=['jan','feb','march','april',
                'may','june','july','aug',
                'sep','oct','nov','dec']
               const labels=[]
             const currentmonth=new Date().getMonth()
             console.log(currentmonth)
            // const remain=11-currentmonth

            for( let i=currentmonth;i<months.length;i--){
                labels.unshift(months[i])
                if(i===0)
                break
            }
          console.log(labels)
 for(let i=months.length-1;i>currentmonth;i--){

 labels.unshift(months[i])
 }
return labels
            }
           
        