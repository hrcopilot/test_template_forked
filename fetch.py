import os
import subprocess
import shutil
import tempfile
import sys

# Definisci l'URL del tuo repository template
template_repo_url = "https://github.com/cechecco/template.git"

def clone_template_to_temp_dir(temp_dir):
    subprocess.check_call(['git', 'clone', template_repo_url, temp_dir])

def update_project_from_template(temp_dir, project_path):
    template_files = [os.path.join(root, file) 
                      for root, _, files in os.walk(temp_dir) 
                      for file in files 
                      if '.git' not in root]

    for file_path in template_files:
        relative_path = os.path.relpath(file_path, temp_dir)
        project_file_path = os.path.join(project_path, relative_path)

        if os.path.exists(project_file_path):
            with open(file_path, 'rb') as template_file, open(project_file_path, 'rb') as project_file:
                if template_file.read() == project_file.read():
                    continue
                else:
                    shutil.copy(file_path, project_file_path)
                    print(f"Updated file {project_file_path} from template")
        else:
            shutil.copy(file_path, project_file_path)
            print(f"Copied new file {project_file_path} from template")

def cleanup_temp_dir(temp_dir):
    shutil.rmtree(temp_dir, ignore_errors=True)

def check_for_uncommitted_changes(project_path):
    os.chdir(project_path)
    output = subprocess.check_output(['git', 'status', '--porcelain'])
    if output:
        print("You have uncommitted changes in your project. Please commit or stash them before updating from the template.")
        sys.exit(1)

def main():
    project_path = os.getcwd()

    check_for_uncommitted_changes(project_path)

    temp_dir = tempfile.mkdtemp()

    try:
        clone_template_to_temp_dir(temp_dir)
        update_project_from_template(temp_dir, project_path)
    finally:
        cleanup_temp_dir(temp_dir)

if __name__ == "__main__":
    main()