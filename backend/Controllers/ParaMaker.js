
require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const ParaController=async(req,res)=>{
    try {
        const {text}=req.body
        const {data} = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write the detail Paragraph about  ${text}`,
            max_tokens: 300,
            temperature: 0.5,
          });
            if(data){
      
               res.send(data.choices[0].text)
         
            }
          
    
        
    } catch (error) {
        res.send({mess:"Well this is not be happen...........",err:error.message})
        
    }
}

module.exports={ParaController}

