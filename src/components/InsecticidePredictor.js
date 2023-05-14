import React from "react";
import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

function InsecticidePredictor() {
  const [crops, setCrops] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(prompt);
    setLoading(true);

    let userQues = `crops: ${crops}. Recommed me the insecticides that can be grown in India for the given crop. Write only one insecticide name.`;

    const options = {
      method: 'POST',
      url: 'https://chatgpt53.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '85385a3127msha8c2f3f26b71ee5p115400jsn3f051379381c',
        'X-RapidAPI-Host': 'chatgpt53.p.rapidapi.com'
      },
      data: {
        messages: [
          {
            role: 'user',
            content: `${userQues}`
          }
        ]
      }
    };
    
    try {
      const response = await axios.request(options);
      let modifiedText = response.data.choices[0].message.content.replace(/\n/g, "<br>");
      document.getElementById("insecticide").innerHTML = modifiedText;
      setLoading(false);
      console.log(response.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100">
        <div className="container max-w-screen-lg mx-auto  mt-32">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">
                    Insecticide Predictor
                  </p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div>
                    <form
                      onSubmit={handleSubmit}
                      className="grid gap-4 gap-y-2 text-sm grid-cols-2 md:grid-cols-6"
                    >
                      <div className="md:col-span-6">
                        <label for="full_name">Crop</label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={(e) => setCrops(e.target.value)}
                        />
                      </div>

                      <div className="md:col-span-6 text-right">
                        <div className="inline-flex items-end">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          {(loading)?<Spinner/>:"Find"}
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="md:col-span-6">
                      <label for="address">Insecticides</label>
                      <div
                        id="insecticide"
                        name="w3review"
                        className="resize-none h-auto border mt-1 py-4 rounded px-4 w-full bg-gray-50"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InsecticidePredictor;
