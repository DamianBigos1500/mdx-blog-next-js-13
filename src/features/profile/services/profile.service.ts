import axios from "@/lib/axios";

export const profileService = {
  updateProfile:(validateData:any)=> {
      return axios.post('api/profile/update', validateData);
        
  }
}

