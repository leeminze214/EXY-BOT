import discord
from discord.ext import commands, tasks
from typing import Optional

intents = discord.Intents.default()
intents.presences = True
 

token = open('tok.txt').read()
bot = commands.Bot(command_prefix='.', help_command =None, case_insensitive=True)
      
   
@bot.event
async def on_ready():
    print('logged in as {0.user}'.format(bot))

@bot.command()
async def ping(ctx):
    await ctx.send(f'Pong! Latency is {round(bot.latency*1000,2)}ms')
    

@bot.command()
async def help(ctx):
    embed = discord.Embed()
    embed.title = 'Help - List of Commands'   
    embed.color = 206694
    embed.add_field(
                name="View info on events",
                value="`.event`",
                inline= False
                )
    embed.add_field(
                name="Access contacts info",
                value="`.contact`",
                inline = False
                )
    embed.add_field(
                name="View your passport",
                value="`.passport`",
                inline = False
                )
    await ctx.send(embed=embed)



@bot.command(aliases = ['events'])
async def event(ctx):
    embed = discord.Embed(
            title="Events",
            url="https://exysociety.org/events/",
            color=discord.Color.blue())
    embed.add_field(
            name="**INNOVATION CHALLENGE 2021**",
            value='A hackathon where participants worked to solve a case study by working building a website with a variety of marketing strategies to promoting a small business during the pandemic.',
            inline=False)
    embed.add_field(
            name="**\nNETWORK YOUR NONPROFIT**",
            value="A webinar that provided a great opportunity for organizations of all sizes across Canada, USA, and the UK to connect and learn from each other.",
            inline=False)
    embed.add_field(
            name="**\nBANKING ON YOUR FUTURE!**",
            value="An online webinar that helped high school and post secondary students enhance their knowledge in financial literacy (stocks, credits, cryptocurrency, and more)!",
            inline=False)
    embed.add_field(
            name="**\nACE THAT INTERVIEW**",
            value="An online interview skills workshop filled with informative tips on how to prepare for an interview, how to reduce stress before an interview, what to keep in mind concerning differences between online and in-person interviews, how to tackle difficult interview questions, and how to avoid common interview mistakes.",
            inline=False)
    embed.add_field(
            name="**\nPROFESSIONAL DEVELOPMENT 101**",
            value="An online webinar consisting of fun and interactive activities to help high school students build a strong resume, improve their professionalism, and start networking in the digital age.",
            inline=False)
    embed.add_field(
            name="**\nWORK WITH ME WEDNESDAYS**",
            value="Every Wednesday throughout October, Expand Youth Society Instagram followers learned about the 21st century skills used by professionals in the arts, sciences, business, and law through Instagram takeovers.",
            inline=False)
    embed.add_field (
            name="**\nA NEW APPROACH TO THE NEW NORMAL**",
            value="An online webinar assisting youth in grades 6 to 12 with maintaining their motivation through the upcoming school year and adapting successfully to their new learning environments.",
            inline=False)
    embed.add_field(
            name="**\nLAUNCHPAD CAMP**",
            value="A week-long camp featuring a new event every day. Each event focused on enhancing a different 21st century skill.",
            inline=False)

    await ctx.send(embed=embed)



@bot.command(aliases = ['contacts'])
async def contact(ctx):
    embed = discord.Embed()
    embed.title = 'EXY Contacts'
    embed.color = discord.Color.blue()
    embed.add_field(
            name='🌐 Website',
            value='https://exysociety.org/',
            inline=False
            )
    embed.add_field(
            name='📷 Instagram',
            value='https://www.instagram.com/exysociety/',
            inline=False
            )
    embed.add_field(
            name='🇱 Linkedin',
            value='https://www.linkedin.com/company/exysociety/mycompany/',
            inline=False
            )
    embed.add_field(
            name='🇫 Facebook',
            value='https://www.facebook.com/expandyouthsociety/',
            inline=False
            )
    embed.add_field(
            name='📧 Email',
            value='expandyouthsociety@gmail.com',
            inline=False
            )
    await ctx.send(embed=embed)




@bot.command(aliases = ['profile', 'userinfo'])
async def passport(ctx):
    target = ctx.author
    embed = discord.Embed()
    embed.title = 'Your Passport'
    embed.color = target.colour
        
    fields = [("Name", str(target), False),
              ("Top role", target.top_role.mention, True),
              ("Joined at", target.joined_at.strftime("%m/%d/%y"), True),
              ("\u200b", '** **', False),
              ("Status", str(target.status).title(), True),
              ("Activity", f"{str(target.activity.type).split('.')[-1].title() if target.activity else 'N/A'} {target.activity.name  if target.activity else ''}", True)]
        
    for name, value, inline in fields:
        embed.add_field(name=name, value=value, inline=inline)

    embed.set_thumbnail(url=target.avatar_url)

    await ctx.send(embed=embed)


bot.run(token, bot = True)
