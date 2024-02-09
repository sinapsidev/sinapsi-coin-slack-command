const VALID_COMMAND_NAMES = new Set([
  'help',
  'aiuto',
  'aiutami',
  'aide'
])

export const canHandle = (_sender, rawText) => {
  if (!rawText) {
    return false
  }
  const text = rawText.toLowerCase()

  const parts = text.split(' ')

  const [
    command
  ] = parts

  if (!VALID_COMMAND_NAMES.has(command)) {
    return false
  }

  return true
}

export const handle = async (_sender, _text) => {
  return {
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Sinapsi Coin Help*
          
To learn about the principles and rules of Sinapsi Coin, read Sinapsinet Italy's playbook post:
(https://www.flowing.it/blog/come-si-lavora-in-flowing-feedback-mentoring-e-flowing-coin/)
          `
        }
      },
      {
        type: 'divider'
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*What you need to know about Sinapsi Coin*:\n\n*To send coins to sailors, use the command:*\n`/coin send [value] to [person] [optiona motive]`.\n\nThe command can be used on any channel, the bot will reply in the channel where the command was launched. \n\nExample: `/coin send 10 to @gioboa for inventing Boa Coins`'
        }
      },
      {
        type: 'divider'
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*To get a summary of your situation, use the command:*:\n`/coin status`.\n\n The response will be a private message not visible to any other user, where the sent coins, received coins, and remaining coins will be listed.'
        }
      },
      {
        type: 'divider'
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '*To view a list of all received Sinapsi Coins:*:\n`/coin history`.\n\n The response will be a private message not visible to any other user, where the received coins will be listed.'
        }
      }
    ]
  }
}
