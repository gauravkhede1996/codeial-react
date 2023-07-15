import {Table} from 'antd';
import {CodeSandboxOutlined} from '@ant-design/icons';
const TableRevise=()=>{
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
        {
            key:'3',
            name:'Gaurav',
            age:26,
            address:' D/16, Janki Nagar Khargone'
        }
      ];
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          filters:[
            {text:' Greater than 30',value:30},
            {text:'Greater than 40',value:40},
            {text:'Greater than 20',value:20}
          ],
          onFilter:(value,record)=>{
            return record.age>value;
          }
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
    return(
        <div>
            <Table
             dataSource={dataSource}
             columns={columns}
             pagination={{total:500}}
             rowSelection={{type:"checkbox",
             selections:[
                Table.SELECTION_NONE,
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT
             ]
                }}
             
             />
             <CodeSandboxOutlined style={{fontSize:30,color:'green'}}/>
        </div>
    )
}
export default TableRevise;