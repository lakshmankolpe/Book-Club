const HandlePageNotFound = (req, res) => {
    res.send(`<div style="  height: 300px; 
        width: 600px;border-radius: 5px; display:inline-block; text-align: center;
        justify-content: center;align-items: center;box-shadow: 5px 5px 10px 1px gray; margin: 10% 27%; ">

        <img src="https://cdn-icons-png.flaticon.com/128/4989/4989793.png" style= height:"50px; " />
        <h1 style="text-align: center; ">404</h1>
        <h2 style="text-align: center; ">Page  Not Found</h2>
        </div>`)
};

export {
    HandlePageNotFound,
}