exports.handler = async function(event) {
  try {
    const body = JSON.parse(event.body);
    const email = body.email;
    const response = await fetch("https://us14.api.mailchimp.com/3.0/lists/067ce3b1e3/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + Buffer.from("anystring:338937c2f1aff6366db82607ab6f34c1-us14").toString("base64")
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        tags: ["waitlist"]
      })
    });
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch(err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};