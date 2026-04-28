exports.handler = async function(event) {
  try {
    const body = JSON.parse(event.body);
    const email = body.email;
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const response = await fetch("https://us14.api.mailchimp.com/3.0/lists/067ce3b1e3/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + Buffer.from("anystring:" + apiKey).toString("base64")
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        tags: ["waitlist"]
      })
    });
    const data = await response.json();
    console.log("Mailchimp response:", JSON.stringify(data));
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch(err) {
    console.log("Error:", err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};