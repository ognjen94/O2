using System;
using System.Collections.Generic;
using System.Text;
using System.IO;


namespace System {
	public class AppUser
    {
		
		private int id;
        private string email;        
		private string username;
        private string password;
        public List<Comment> m_Comment { get; set; }

		public List<RoomReservation> m_RoomReservation { get; set; }

		public List<Accommodation> m_Accommodation { get; set; }

		public AppUser(){

		}

		~AppUser(){

		}

		public string Email{
			get{
				return email;
			}
			set{
				email = value;
			}
		}

		public int Id{
			get{
				return id;
			}
			set{
				id = value;
			}
		}

		public string Password{
			get{
				return password;
			}
			set{
				password = value;
			}
		}

		public string Username{
			get{
				return username;
			}
			set{
				username = value;
			}
		}

    }

}