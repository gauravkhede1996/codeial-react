import { SearchOutlined } from '@ant-design/icons';
import {Table,Input} from 'antd';
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import { searchProduct } from '../api';
const TableComponent=()=>{
    const [dataSource,setDataSource]=useState([]);
    const [loading,setLoading]=useState(false);
    const [totalPage,setTotalPage]=useState(0);

    useEffect(()=>{
        fetchRecords(0,7);
    },[]);
    const columns=[{
        title:'Name',
        dataIndex:'productName',
        filterDropdown:({setSelectedKeys,selectedKeys,confirm})=>{
            return (
                <Input 
                autoFocus
                placeholder='Type here'
                value={selectedKeys[0]}
                onChange={(e)=>{
                    setSelectedKeys(e.target.value?[e.target.value]:[]);
                }}
                onPressEnter={()=>{
                    confirm();
                }}
                onBlur={()=>{
                    confirm();
                }}
                /> 
            )
        },
        filterIcon:()=>{
            return <SearchOutlined />
        },
        onFilter:async (value,record)=>{
            const searchProductAPI=async()=>{
                let output=await searchProduct(0, 7, value);
                return setDataSource(output.data);
            }
            searchProductAPI();
            
            return ;
        }
    },
    {
        title:'Quantity',
        dataIndex:'quantityAvailable'
    },
    {
        title:'Price',
        dataIndex:'price',
        sorter:(record1,record2)=>{
            return record1.price>record2.price;
        },
        filters:[{
            text:'Greater than 500',
            value:500
        },
        {
            text:'Greater than 1200',
            value:1200
        },
        {
            text:"Greater than 5000",
            value:5000
        }],
        onFilter:(value,record)=>{
            return record.price>value
        }

        
    },]
    const fetchRecords=(page,itemsPerPage)=>{
        setLoading(true);
        fetch(`http://localhost:8000/product/fetchProducts/?page=${page}&limit=${itemsPerPage}`).then(res=>{
            res.json().then(response=>{
                console.log(response," is the response of productFetch in limits and pages");
                setDataSource(response.data);
                setTotalPage(response.totalPage);
                setLoading(false);
            })
        })
    }
    return(
        <div>
            
            <Table loading={loading} columns={columns} dataSource={dataSource} pagination={{
                total:totalPage*10,
                onChange:(page)=>{
                    fetchRecords(page-1,7);
                }
            }}></Table>
            
            
        </div>
    )
}
export default TableComponent;