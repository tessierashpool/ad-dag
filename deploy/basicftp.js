const ftp = require("basic-ftp")
 
async function example() {
    const client = new ftp.Client()
    try {
        await client.access({
            host: process.env.ftp_host,
            user: process.env.ftp_user,
            password: process.env.ftp_password
        })
        console.log(await client.list())
        await client.ensureDir(process.env.ftp_remotePath)
        await client.clearWorkingDir()
        await client.uploadDir(__dirname+ '/..' + process.env.ftp_localPath)
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}
 
example()