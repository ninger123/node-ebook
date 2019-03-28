const env = require('env')

let resUrl
let mp3FilePath
if (env === 'dev') {
    resUrl = 'http://192.168.43.178:8081'
    mp3FilePath = 'C:\\ning\\resource\\mp3'
} else if (env === 'prod') {
    resUrl = 'http://39.96.23.9'
    mp3FilePath = '/root/nginx/upload/mp3'
}

const category = [
    'Biomedicine',
    'BusinessandManagement',
    'ComputerScience',
    'EarthSciences',
    'Economics',
    'Engineering',
    'Education',
    'Environment',
    'Geography',
    'History',
    'Laws',
    'LifeSciences',
    'Literature',
    'SocialSciences',
    'MaterialsScience',
    'Mathematics',
    'MedicineAndPublicHealth',
    'Philosophy',
    'Physics',
    'PoliticalScienceAndInternationalRelations',
    'Psychology',
    'Statistics'
]

module.exports = {
    resUrl,
    category,
    mp3FilePath
}
