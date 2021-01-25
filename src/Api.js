import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTable from "react-table";

// import 'react-table/react-table.css'

const Api = ()=>{

    const [data, setData] = useState([])
    const [loading, setLoad] = useState(true)

    useEffect(()=>{
        const fetchData = async () => {
            const result = await axios("https://app.getrecall.com/api/products");

            setData(result.data)
            setLoad(false)
        }
        fetchData();
    }, [])

    const columns = [
        {
            Header:"Name",
            accessor:"name"
        },
        {
            Header:"Name",
            accessor:"name"
        },
        {
        Header:"Name",
            accessor:"name"
        },
        {
            Header:"Name",
            accessor:"name"
        },
    ]
    console.log(data.products)

    return(
        <div>
        {loading || !data? 
        <div>Loading...</div>
        : 
        <div>
            <ReactTable
             columns={columns}
            >

            </ReactTable>
        </div>
    }
    </div>
    )




}

export default Api


// export default class Api extends React.Component{

    
//     state={
//         loading:true,
//         data:[]
//     }

//     componentDidMount(){
//         const url = "https://app.getrecall.com/api/products"
//         fetch(url,{
//             method: "GET"
//         }).then(response=> response.json()).then(data=>
//             {console.log(data)
//             this.setState({loading:false, data:data})
//             }
//             )
//         // console.log(this.state.data)
//         // const data = await response.json();
//         // this.setState({loading:false, data:data})
//     }

//     // {this.state.products.map((key, product)=>{
//     //     <li>{product.name}</li>
//     // })}

    

//     render(){
//         const {data, loading} = this.state
//         console.log(data);
//         // let s = data.find(obj => {
//         //     return obj.id === 0
//         //   })
//         console.log("------------------------------------------")
//         // const listItems = data.products.map((product) =>    <li>{product.id}</li>  );  
//         // <ul>{data.products.map((product,key) =>    <li key={key}>{product.name}</li>  )}</ul>
//        if(loading === false) console.log(data.products[0])
//        const columns = [
//            {
//                Header:"Name",
//                accessor:"name"
//            },
//            {
//                Header:"Name",
//                accessor:"name"
//            },
//            {
//             Header:"Name",
//                 accessor:"name"
//             },
//             {
//                 Header:"Name",
//                 accessor:"name"
//             },
//        ]
//         return(
//             <div>
//                 {loading || !data? 
//                 <div>Loading...</div>
//                 : 
//                 <ReactTable
//                     columns={columns}
//                 >

//                 </ReactTable>
//             }
//             </div>
//             // <ReactTable
//             //         columns={columns}
//             //     >

//             // </ReactTable>
//         );
//     }
    
// }

