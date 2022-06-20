import { Tag} from 'antd';


export const columns = [
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Product Properties',
      dataIndex: 'productProperties',
      key: 'productProperties',
      render: (_, { productProperties }) => (
        <>
          {productProperties.map((property) => {
            return (
              <Tag  key={property.id}>
                <p>{property.name}</p>
                <p>{property.value}</p>
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Supplier',
      dataIndex: 'supplier',
      key: 'supplier', 
    },
    {
      title : 'Properties',
      dataIndex : 'properties',
      key : 'properties',
      children : [
        {
          title : "Name",
          dataIndex : "name",
          key : "name",
          render : (_, {properties}) => (
            <>
            {
              properties.map(property => <p key={property.name}>{property.name}</p>)
            }
            </>
          )
        },
        {
          title : "Value",
          dataIndex : "value",
          key : "value",
          render : (_, {properties}) => (
            <>
            {
              properties.map(property => <p key={property.name}>{property.value ? property.value : "No"}</p>)
            }
            </>
          )
        }
      ]
  
    }
  
  ];
  