let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*Bot Creado por CharliexNati* ${pesan}`
let teks = `〔 *${wm}* 〕\n 《⺀𝑹𝒆𝒗𝒊𝒗𝒂𝒏 𝒑𝒍𝒂𝒏𝒕𝒂𝒔 - 𝒕𝒆𝒏𝒆𝒎𝒐𝒔 𝒗𝒆𝒓𝒔𝒖𝒔 💋⺀》 \n\n ${oi}\n\n *《 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬 》*\n`
for (let mem of participants) {
teks += `✼👸🏻 @${mem.id.split('@')[0]}\n`}
teks += `➥ 𝐌𝐚𝐫𝐢𝐚 𝐁𝐨𝐭\n`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(sorras|putas|todasputas|todos|todassorras)$/i
handler.admin = true
handler.group = true
export default handler
