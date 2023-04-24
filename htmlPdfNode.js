htmlPdfNode = (req, res) => {
    try {
        const body = req.body
        let requiredParams = ["html"];
        let verifiedData = global.verifyParams(requiredParams, body);
        if (!verifiedData.success) {
            return (global.responseFunction(res, verifiedData.statusCode, verifiedData));
        }
        htmlTopdfNode.generatePdf({ content: body.html }, { format: 'A4' }).then(pdfBuffer => {
            if(pdfBuffer){
                global.responseFunction(res, 200, {"message": "Verified data successfully", "data": Buffer.from(pdfBuffer).toString('base64'), "success":true});
            }else{
                global.responseFunction(res, 400, {"message": "Error In converting Html to PDF", "success":false});
            }
          }).catch(err=>{
            global.responseFunction(res, 400, {"message": "Error In converting Html to PDF", "data": err, "success":false});
          });

    } catch (err) {
        return (global.responseFunction(res,
            500, {
                "success": false,
                "statusCode": 500,
                "message": "Something went wrong",
                "data": err
            }
        ))
    }
};
