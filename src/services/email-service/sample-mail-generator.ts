
interface sampleData {
    subTitle: string;
    body: string;
    Disclaimer: string;
    userEmail? : string;
}

export const sampleMailGenerator = ({ subTitle, body, Disclaimer, userEmail }: sampleData) => {

    return (
        `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    *{
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    }
                    .holder{
                        width: 100%;
                        background-color: #fff;
                    }
                    h2{
                        font-size: 2em;
                        text-align: center;
                    }
                    .content{
                        width: 90%;
                        max-width: 600px;
                        margin: 10vh auto;
                        border-radius: 15px;
                        border: 1px dashed #b8d4e0;
                        padding: 18px;
                    }
                    .imh{
                        width: 40%;
                        max-width: 150px;
                        margin: 3vh auto;
                    }
                    .imh img{
                        width: 100%;
                    }
                    .disclaimer{
                        background-color: #eeeeee;
                        padding: 20px;
                        width: 100%;
                        color: rgba(0, 0, 0, 0.6);
                    }
                </style>
            </head>
            <body>
                <div class="holder">
                    <div class="content">
                        <div class="imh">
                            <img src="https://vanilla-network.netlify.app/assets/images/marketing/logo-black.jpg" alt="">
                        </div>
                        <h2>${subTitle}</h2>
                        <p>
                        ${body}
                        </p>
                    </div>
                    <div class="disclaimer">
                        <p>
                            <strong>Note:</strong>
                            <span style="font-style: italic;">
                              ${Disclaimer}
                            </span>
                        </p>
                    </div>
                </div>
            </body>
            </html>`
    );

}