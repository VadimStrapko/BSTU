using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Дан__массив_целых_чисел_найти_в_нем_пару_с_заданной_суммой
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Random random = new Random();
            // Задаем размер массива
            int arrLength = 20;
            // Создаем массив
            int[] arr = new int[arrLength];
            for (int i = 0; i < arrLength; i++)
            {
                arr[i] = random.Next(10);
            }
            foreach (int item in arr)
            {
                Console.WriteLine(item);
            }
            Console.WriteLine("Введите сумму: ");
            int sum=int.Parse(Console.ReadLine());
            
            for (int i = 0; i <=arrLength; i++)
            {
                if (arr[i] + arr[i+1]==sum)
                {
                    Console.WriteLine(sum);
                }
            }
        }
    }
}
