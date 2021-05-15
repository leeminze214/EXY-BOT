import discord
from discord.ext import commands, tasks
 

token = open('tok.txt').read()
bot = commands.Bot(command_prefix='.', help_command =None)
      
   
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
                name="Access helpful links",
                value="`.link`",
                inline = False
                )
    await ctx.send(embed=embed)


bot.run(token, bot = True)
