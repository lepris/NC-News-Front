export const dateFinder = (timestamp) => {

    const createdWhen = new Date(timestamp)

    const date = createdWhen.getDate()
    const month = createdWhen.getMonth() + 1
    const year = createdWhen.getFullYear()

    const now = new Date()
    const nowDate = now.getDate()
    const nowMonth = now.getMonth() + 1
    const nowYear = now.getFullYear()


    return `${date} / ${month} / ${year}`
}