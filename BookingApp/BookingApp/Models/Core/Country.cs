using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace System {
	public class Country {

		private int id;
		private string name;
        private int code;
        public List<Region> m_Region { get; set; }

		public Country(){

		}

		~Country(){

		}

		public int Code{
			get{
				return code;
			}
			set{
				code = value;
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