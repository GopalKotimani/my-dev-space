import { createSlice } from '@reduxjs/toolkit'
import profileImage from '../assets/profile_reference.jpg'; // Adjust the path as necessary

const initialState = {
  name: 'Gopal',
  bio: 'I build things for the web using React, JavaScript, and more!',
  image: profileImage,
  resumeUrl: '',
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action) {
      const { name, bio, image, resumeUrl } = action.payload;
      state.name = name;
      state.bio = bio;
      state.image = image;
      state.resumeUrl = resumeUrl;
    },
  }
})

export const { setProfile } = profileSlice.actions
export default profileSlice.reducer
