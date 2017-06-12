using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace System {
	public class Place {

		private int id;
		private string name;
		public List<Accommodation> m_Accommodation { get; set; }

        [Required]
        public Region region { get; set; }

        public Place(){

		}

		~Place(){

		}

		public int Id{
			get{
				return id;
			}
			set{
				id = value;
			}
		}

		public string Name{
			get{
				return name;
			}
			set{
				name = value;
			}
		}

	}
}