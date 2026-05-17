import request from '@/utils/request'
import { teamMembers } from '@/data/members'

// Helper to convert newline separated string to array
const splitText = (text) => {
  if (!text) return []
  return text.split(/\r?\n/).filter(line => line.trim() !== '')
}

// Map backend member format to frontend member format
const mapMemberData = (apiMember) => {
  const staticMember = teamMembers.find(m => m.name === apiMember.name) || {}

  return {
    id: apiMember.id.toString(),
    category: apiMember.role_display,
    name: apiMember.name,
    englishName: apiMember.english_name || staticMember.englishName || '',
    title: apiMember.role_display,
    image: apiMember.image || '/images/placeholder-avatar.png',
    bio: splitText(apiMember.introduction),
    education: splitText(apiMember.education),
    experience: splitText(apiMember.experience),
    currentPositions: splitText(apiMember.current_position),
    publications: splitText(apiMember.publications),
    specialties: splitText(apiMember.expertise)
  }
}

/**
 * Get all members
 */
export async function getMembers(params) {
  const res = await request({
    url: '/members/',
    method: 'get',
    params
  })
  
  const data = Array.isArray(res) ? res : (res.data || res.results || [])
  return data.map(mapMemberData)
}

/**
 * Get a specific member's detail
 * @param {string|number} id Member ID
 */
export async function getMemberDetail(id) {
  const res = await request({
    url: `/members/${id}/`,
    method: 'get'
  })
  
  const data = res.data || res
  return mapMemberData(data)
}
