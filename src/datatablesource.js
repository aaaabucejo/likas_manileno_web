export const userColumns = [
    { field: "id", headerName:"ID", width:70},
    {field:"user",headerName:"First Name", width:230, renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt=""/>
                {params.row.firstname}
            </div>
        )
    },
},
    {field:"lastname",headerName:"Last Name", width:150},
    {field:"contact",headerName:"Contact No.", width:155},
    {field:"evacsite",headerName:"Evactuation Site", width:250},
    {field:"status",headerName:"Status", width:120, renderCell:(params)=>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }},
    
];

 

