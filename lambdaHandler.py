import json
from bardapi import Bard
import boto3


def lambda_handler(event, context):
   
    print(event)
    param1 = str(json.loads(event['body'])['key1']) + '\n'
    param2 = str(json.loads(event['body'])['key2']) + '\n'
    param3 = str(json.loads(event['body'])['key3']) + '\n'
    param4 = str(json.loads(event['body'])['key4']) + '\n'
    param5 = str(json.loads(event['body'])['key5']) + '\n'
    param6 = str(json.loads(event['body'])['key6']) + '\n'
    # param1 = 'Energy'
    # param2 = 'Communication'
    # param3 = 'Healthcare'
    # param4 = 'AAPL'
    # param5 = 'NVDA'
    # param6 = 'GOOGL'
    sender_email = "willzhang@utexas.edu"
    recipient_email = "willzhang@utexas.edu"
    ses = boto3.client('ses')
    subject = "Your Finbits Newsletter"
    # prompt1 = f'''with the {param1} sector, write a summary of the sector's recent performance following this html template: 
    #             <h3>{{insert sector name here}}</h3>
    #             <p>{{insert sector summary here}}</p>
    #             <table class="center">
    #                 <tr>
    #                     <th><a href="#" class="{{insert link to a recent source discussing a notable stock in the sector}}" style="padding:0 20px">{{insert stock name here}}</a></th>
    #                     <th><a href="#" class="{{insert link to a recent source discussing a notable stock in the sector}}" style="padding:0 20px">{{insert stock name here}}</a></th> 
    #                     <th><a href="#" class="{{insert link to a recent source discussing a notable stock in the sector}}" style="padding:0 20px">{{insert stock name here}}</a></th>
    #                 </tr>
    #             </table> 
    #             '''
    # prompt2 = f'''with the {param2} sector, write a summary of the sector's recent performance following this html template: <h3>{{insert sector name here}}</h3>
    #             <p>{{insert sector summary here}}</p>
    #             <table class="center">
    #                 <tr>
    #                     <th><a href="#" class="{{insert link to a recent source discussing a notable stock in the sector}}" style="padding:0 20px">{{insert stock name here}}</a></th>
    #                     <th><a href="#" class="{{insert link to a recent source discussing a notable stock in the sector}}" style="padding:0 20px">{{insert stock name here}}</a></th> 
    #                     <th><a href="#" class="{{insert link to a recent source discussing a notable stock in the sector}}" style="padding:0 20px">{{insert stock name here}}</a></th>
    #                 </tr>
    #             </table> 
    #             '''
    # prompt3 = f'''with the {param3} sector, write a summary of the sector's recent performance following this html template: <h3>{{insert sector name here}}</h3>
    #             <p>{{insert sector summary here}}</p>
    #             <table class="center">
    #                 <tr>
    #                     <th><a href="#" class="{{insert link to a recent source discussing a notable stock in the sector}}" style="padding:0 20px">{{insert stock name here}}</a></th>
    #                     <th><a href="#" class="{{insert link to a recent source discussing a notable stock in the sector}}" style="padding:0 20px">{{insert stock name here}}</a></th> 
    #                     <th><a href="#" class="{{insert link to a recent source discussing a notable stock in the sector}}" style="padding:0 20px">{{insert stock name here}}</a></th>
    #                 </tr>
    #             </table> 
    #           '''
    # prompt1 = f'Generate a concise in 3 sentences and up-to-date summary of the current stock and market conditions in the {param1} sector.  Include key indicators, recent trends, and any notable events impacting these sectors. Ensure the summary is accurate, detailed, and reflects the most recent information available. The goal is to provide a comprehensive overview for someone seeking precise insights into the state of the stocks and market conditions in these specific sectors. '
    # prompt2 = f'Generate a concise  in 3 sentences  and up-to-date summary of the current stock and marktet conditions in the  {param2} sector. Include key indicators, recent trends, and any notable events impacting these sectors. Ensure the summary is accurate, detailed, and reflects the most recent information available. The goal is to provide a comprehensive overview for someone seeking precise insights into the state of the stocks and market conditions in these specific sectors. '
    # prompt3 =  f'Generate a concise  in 3 sentences and up-to-date summary of the current stock and marktet conditions in the  {param3} sector. Include key indicators, recent trends, and any notable events impacting these sectors. Ensure the summary is accurate, detailed, and reflects the most recent information available. The goal is to provide a comprehensive overview for someone seeking precise insights into the state of the stocks and market conditions in these specific sectors. '
    prompt1 = f"with the {param1} sector, write a three sentence summary of the sector's recent performance. include names of relevant stocks and notable news."
    prompt2 = f"with the {param2} sector, write a three sentence summary of the sector's recent performance. include names of relevant stocks and notable news."
    prompt3 = f"with the {param3} sector, write a three sentence summary of the sector's recent performance. include names of relevant stocks and notable news."
    prompt4 = f' Give a plain-text 3 sentence summary of the conditions of the stock with ticker {param4}, including a comprehensive summary of trends and recent company performance in the last quarter.'
    prompt5 = f' Give a plain-text 3 sentence summary of the conditions of the stock with ticker {param5}, including a comprehensive summary of trends and recent company performance in the last quarter.'
    prompt6 = f' Give a plain-text 3 sentence summary of the conditions of the stock with ticker {param6}, including a comprehensive summary of trends and recent company performance in the last quarter.'
    prompt7 = f' give me a three sentence summary of a recent article (within the past week) regarding a notable piece of news in the stock market pertaining to any sector. your response should be one paragraph long and i do not want to follow up.'
    prompt8 = f' give me a three sentence summary of a recent article (within the past week) regarding a notable piece of news in the stock market pertaining to any sector. your response should be one paragraph long and i do not want to follow up.'
    prompt9 = f' give me a three sentence summary of a recent article (within the past week) regarding a notable piece of news in the stock market pertaining to any sector. your response should be one paragraph long and i do not want to follow up.'
    #prompt8 = f' Give a plain-text 3 sentence summary of the conditions of the stock with ticker {param8}, including a comprehensive summary of trends and recent company performance in the last quarter, including any news about the company in a comprehensive and clear way.'
    bard = Bard(token='fwiv5MKy2RLx9HiHDzdGsaf6yMPKuv6eEJwaseByWy69JrTSkVea5eq_8E9vRAk_06oygg.', timeout=300)

    responseBody1 = bard.get_answer(prompt1)['content']
    responseBody2 = bard.get_answer(prompt2)['content']
    responseBody3 = bard.get_answer(prompt3)['content']
    responseBody4 = bard.get_answer(prompt4)['content']
    responseBody5 = bard.get_answer(prompt5)['content']
    responseBody6 = bard.get_answer(prompt6)['content']
    responseBody7 = bard.get_answer(prompt7)['content']
    responseBody8 = bard.get_answer(prompt8)['content']
    responseBody9 = bard.get_answer(prompt9)['content']
           
    # responseBody = 'Hi'
    
    html_response = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FinBits Report</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
        }}
        .container {{
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
        }}
        .header {{
            text-align: center;
            margin-bottom: 20px;
        }}
        .section {{
            margin-bottom: 30px;
        }}
        .section-title {{
            font-size: 20px;
            margin-bottom: 10px;
            color: #333;
        }}
        .section-content {{
            color: #666;
            margin-bottom: 20px;
        }}
        .article-link {{
            display: block;
            margin-top: 10px;
            text-decoration: none;
            color: #007bff;
        }}
        .article-link:hover {{
            text-decoration: underline;
        }}
        hr.solid {{
            border-top: 3px solid #bbb;
        }}
        .center {{
            margin-left: auto;
            margin-right: auto;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://i.imgur.com/DdDKGkI.png" alt="Banner" width="100%">
            <p style="text-align:center"> Your curated market and portfolio report is here.</p>
        </div>
        
        <hr class="solid">

        <div class="section">
            <h2 class="section-title" style="text-align:center"> <i> YOUR SECTOR SUMMARIES </i> </h2>

            <div class="section-content">
                <h3>{param1}</h3>
                <p>{responseBody1}</p>
            </div>

            <div class="section-content">
                <h3>{param2}</h3>
                <p>{responseBody2}</p>
            </div>

            <div class="section-content">
                <h3>{param3}</h3>
                <p>{responseBody3}</p>
            </div>
        </div>

        <hr class="solid">

        <div class="section">
            <h2 class="section-title" style="text-align:center"> <i> YOUR PORTFOLIO PERFORMANCE </i> </h2>

            <div class="section-content">
                <h3>TOP 3 MOVERS:</h3>
                <p> ↘️ {param4}: {responseBody4}</p>
                <p> ↗️ {param5}: {responseBody5}</p>
                <p> ↘️ {param6}: {responseBody6}</p>

            </div>

        </div>

        <hr class="solid">

        <div class="section">
            <h2 class="section-title" style="text-align:center"> <i> GENERAL NEWS </i> </h2>

            <div class="section-content">
                <h3>Article 1:</h3>
                <p>{responseBody7}</p>
                <a href="#" class="article-link">Read more</a>
            </div>

            <div class="section-content">
                <h3>Article 2:</h3>
                <p>{responseBody8}</p>
                <a href="#" class="article-link">Read more</a>
            </div>

            <div class="section-content">
                <h3>Article 3:</h3>
                <p>{responseBody9}</p>
                <a href="#" class="article-link">Read more</a>
            </div>
        </div>
    </div>
</body>
</html>'''
    
    try:
        response = ses.send_email(
            Source=sender_email,
            Destination={
                'ToAddresses': [recipient_email],
            },
            Message={
                'Subject': {
                    'Data': subject,
                },
                'Body': {
                    'Html': {
                        'Charset': 'UTF-8',
                        'Data': html_response,
                    },
                },
            },
        )
        print(f"Email sent! Message ID: {response['MessageId']}")
        return {
            'statusCode': 200,
            'body': json.dumps('Email sent successfully')
        }
    except Exception as e:
        print(f"Error sending email: {e}")
        return {
            'statusCode': 500,
            'body': json.dumps('Error sending email')
        }
