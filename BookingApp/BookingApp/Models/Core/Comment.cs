using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace System {
    public class Comment {

        private int id;
        private int grade;
        private string text;
        public List<AppUser> m_User { get; set; }
        public List<Accommodation> m_Accommodation { get; set; }

        [Required]
        public AppUser user { get; set; }

        [Required]
        public Accommodation accomodation { get; set; }

		public Comment(){

		}

		~Comment(){

		}

        public int Id
        {
            get
            {
                return id;
            }
            set
            {
                id = value;
            }
        }

        public int Grade{
			get{
				return grade;
			}
			set{
				grade = value;
			}
		}

		public string Text{
			get{
				return text;
			}
			set{
				text = value;
			}
		}

	}
}