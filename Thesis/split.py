import os
from PyPDF2 import PdfReader, PdfWriter
import sys

def split_pdf(input_path, output_dir):
    """
    Split PDF into multiple files according to specified ranges and names
    """
    # Ensure output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Define the splitting ranges and output names
    splits = [
        {"start": 1, "end": 8, "name": "title_pages.pdf"},
        {"start": 9, "end": 22, "name": "ch1_intro.pdf"},
        {"start": 23, "end": 54, "name": "ch2_resonance.pdf"},
        {"start": 55, "end": 86, "name": "ch3_trappist.pdf"},
        {"start": 87, "end": 106, "name": "ch4_solar.pdf"},
        {"start": 107, "end": 128, "name": "ch5_pps.pdf"},
        {"start": 129, "end": 152, "name": "ch6_disk.pdf"},
        {"start": 153, "end": 170, "name": "Bibliography.pdf"},
        {"start": 171, "end": 174, "name": "summary.pdf"},
        {"start": 175, "end": 178, "name": "dutch_summary.pdf"},
        {"start": 179, "end": 183, "name": "publications_cv_acknowledgements.pdf"}
    ]
    
    try:
        # Read the input PDF
        reader = PdfReader(input_path)
        total_pages = len(reader.pages)
        print(f"Total pages in input PDF: {total_pages}")
        
        # Process each split range
        for split in splits:
            start = split["start"] - 1  # Convert to zero-based index
            end = split["end"] - 1      # Convert to zero-based index
            
            # Validate page range
            if start < 0 or end >= total_pages:
                print(f"Warning: Range {split['start']}-{split['end']} is out of bounds. Skipping...")
                continue
            
            # Create PDF writer for this split
            writer = PdfWriter()
            
            # Add pages to writer
            for page_num in range(start, end + 1):
                writer.add_page(reader.pages[page_num])
            
            # Save the split PDF
            output_path = os.path.join(output_dir, split["name"])
            with open(output_path, "wb") as output_file:
                writer.write(output_file)
            
            print(f"Created: {split['name']} (pages {split['start']}-{split['end']})")
        
        print(f"\nAll splits completed successfully! Output directory: {output_dir}")
        
    except FileNotFoundError:
        print(f"Error: Input file '{input_path}' not found.")
    except Exception as e:
        print(f"Error processing PDF: {e}")

if __name__ == "__main__":
    # Check if filename is provided as command line argument
    if len(sys.argv) < 2:
        print("Usage: python3 split_pdf.py <filename.pdf> [output_directory]")
        print("\nExample:")
        print("  python3 split_pdf.py myfile.pdf")
        print("  python3 split_pdf.py myfile.pdf custom_output_dir")
        sys.exit(1)
    
    # Get input filename from command line
    input_pdf = sys.argv[1]
    
    # Get output directory (default: "split_pdfs")
    output_dir = sys.argv[2] if len(sys.argv) > 2 else "split_pdfs"
    
    # Run the splitting process
    split_pdf(input_pdf, output_dir)

